import type { RecordModel } from "pocketbase";
import pb from "@lib/db";
import type { Book, Chapter, Rule } from "@types";

export const getAll = async () => {
    const resultList = await pb.collections.getFullList({ requestKey: null });
    return resultList;
};

export const getTable = async (
    table: string,
    from?: number,
    to?: number,
    page?: string | string[],
    expand?: string
) => {
    let options = { requestKey: null, page: Number(page) || 1 };
    const addition = { expand: `${expand}` };
    if (expand) {
        options = { ...options, ...addition };
    }
    let resultList;
    try {
        resultList = await pb
            .collection(table)
            .getList(from || 1, to || 50, options);
    } catch (error) {
        console.log(error);
    }
    return resultList;
};

export const sendData = async (data: string[], table: string) => {
    const batch = pb.createBatch();
    data.map((item) => {
        const obj = { original_name: item, name: item };
        batch.collection(table).create(obj);
    });
    const result = await batch.send();
    return result;
};

export const updateTable = async (table: string, data: object) => {
    const resultList: RecordModel[] = [];
    try {
        const l = await pb
            .collection(table)
            .getList(1, 1000, { requestKey: null, perPage: 1000 });
        for (let i = 1; i <= l.totalPages; i++) {
            const objects = await pb
                .collection(table)
                .getList(1, 1000, { requestKey: null, page: i, perPage: 1000 });
            objects.items.map((obj) => {
                resultList.push(obj);
            });
        }
        const batch = pb.createBatch();
        resultList.map((item) => batch.collection(table).update(item.id, data));
        await batch.send();
        return { status: "ok" };
    } catch (error) {
        console.log(error);
        return { status: "error" };
    }
};

export const create = async (table: string, data: string[]) => {
    const batch = pb.createBatch();
    data.forEach(async (item) =>
        batch
            .collection(table)
            .create({
                name: item,
                original_name: item,
                source_id: ["4b593u9ew1bsb6b"],
                type: "d78te84144f9u8c",
            })
    );
    await batch.send();
};

export const getBook = async (book: string) => {
    try {
        const currentBook: Book = await pb
            .collection("Book")
            .getFirstListItem(
                `source_id.original_name ~ "${book.replace("-", " ")}"`,
                {
                    expand:
                        "source_id,type,content.subrules,content.source_id,content.type," +
                        "content.subrules.subrules,content.subrules.source_id,content.subrules.type," +
                        "content.subrules.subrules.subrules,content.subrules.subrules.source_id,content.subrules.subrules.type," +
                        "content.subrules.subrules.subrules.subrules,content.subrules.subrules.subrules.source_id,content.subrules.subrules.subrules.type," +
                        "content.subrules.subrules.subrules.subrules.subrules,content.subrules.subrules.subrules.subrules.source_id,content.subrules.subrules.subrules.subrules.type",
                }
            );

        return currentBook;
    } catch (error) {
        console.log(`Error fetching chapter "${book}":`, error);
        return undefined;
    }
};

export const getChapter = async (rulebook: string | undefined, chapter: string | undefined) => {
    if (rulebook === undefined || chapter === undefined) {
        return undefined;
    }
    try {
        const currentRulebook = await getBook(rulebook);
        const currentChapter =
            currentRulebook?.expand?.content &&
            findChapter(currentRulebook?.expand?.content, chapter, []);
        return {chapter:currentChapter, rulebook: currentRulebook};
    } catch (error) {
        console.log(`Error fetching chapter "${chapter}":`, error);
        return undefined;
    }
};

export const findChapter = (
    chapters: Rule[],
    targetId: string,
    content: Rule[] = []
): Chapter | undefined => {
    try {
        for (let i = 0; i < chapters.length; i++) {
            const chapter = chapters[i];

            if (chapter.id === targetId) {
                const prevChapter = i > 0 ? chapters[i - 1] : content[content.length - 1];
                const nextChapter = i < chapters.length - 1 ? chapters[i + 1] : undefined;

                const prev = prevChapter && {
                    id: prevChapter?.id,
                    name: prevChapter?.name,
                    original_name: prevChapter?.original_name
                }

                const next = nextChapter && {
                    id: nextChapter?.id,
                    name: nextChapter?.name,
                    original_name: nextChapter?.original_name
                }

                return { rule: chapter, next_rule: next, prev_rule: prev };
            }

            if (chapter.expand?.subrules) {
                const found = findChapter(chapter.expand.subrules, targetId, [...content, chapter]);
                if (found) return found;
            }
        }
    } catch (error) {
        console.log("Error:", error);
    }

    return undefined;
};

