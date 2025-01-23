import { pb } from "@/app/lib";
import { getArrayFromSet } from "./parse";
import { Source } from "@/app/types";

type Props = {
    folder: string,
    filter: string,
    filtering?: string,
    folder_type: "raw" | "sorted" | "parsed",
    value: string,
    source: {
        id: string,
        name: string
    },
    core: boolean,
    set: boolean
}

const data_cr: Props = {
    folder: 'background',
    filter: 'region',
    folder_type: "sorted",
    value: '',
    source: {
        id: '',
        name: ''
    },
    core: false,
    set: false
}

const create = async (table: string, data:Props) => {
    

    const set: { name: string, filter_name: string | string[]; source_name: string }[] = await getArrayFromSet(data?.folder, data.folder_type, data?.filter, data?.source.name, data?.core)
    const sources: Source[] = await pb.collection('Source').getFullList()
    const batch = pb.createBatch();

    if (!data.set) {
        set.forEach(async item => {
            const source = sources.find(source => source.original_name === item.source_name)
            batch.collection(table).create({ name: item.name, original_name: item.name, source_id: source?.id })
        })
    } else {
        const filteredData: string[] = []
        set.filter(item=>item.filter_name !==undefined).map(item => {
            console.log(item)
            Array.isArray(item.filter_name) ? item.filter_name.map(name => filteredData.push(name)) : filteredData.push(item.filter_name)
        })
        const filtered = Array.from(new Set(filteredData))
        filtered.forEach(async item => {
            batch.collection(table).create({ name: item, original_name: item })
        })
        // console.log(filtered)
    }


    try {
        const res = await batch.send()
        console.log(res.length, res.length > 0)
    } catch (error) {
        console.log(error)
    }


}

// create('Background',data_cr)

const data_up: Props = {
    folder: 'background',
    filter: 'type', //json
    filtering: 'type', //db
    folder_type: "sorted",
    value: '',
    source: {
        id: '',
        name: ''
    },
    core: false,
    set: false
}

const update = async (table: string,data:Props, filter_table?: string) => {
    

    const set: { name: string, filter_name: string | string[]; source_name: string }[] = await getArrayFromSet(data?.folder, data.folder_type, data?.filter, data?.source.name, data?.core)
    const updatingTable = await pb.collection(table).getFullList()
    const filterTable = filter_table ? await pb.collection(filter_table).getFullList() : false
    const batch = pb.createBatch();
    updatingTable.map(item => {
        const found = set.find(i => i.name === item.original_name)
        // console.log('found: ', found)
        const founded: string[] = []
        Array.isArray(found?.filter_name) ? found?.filter_name.map(i => founded.push(i)) : founded.push(found?.filter_name||'')
        // console.log('founded: ', founded)

        if (filterTable) {

            
            const ids: string[] = []
            founded.map(item => {
                const f = filterTable.filter(i => i.name === item)
                return f.map(i => ids.push(i.id))
            })
            batch.collection(table).update(item.id, item.original_name, { [data.filtering || '']: Array.from(new Set(ids)) })
            console.log(item.id, item.original_name, { [data.filter]: Array.from(new Set(ids)) })
            console.log('SSSS')
        } else {
            batch.collection(table).update(item.id, item.original_name, { [data.filtering || '']: founded[0] })
            console.log(item.id, item.original_name, { [data.filter]: founded[0] })
            console.log('Ssssss')
        }


    })




    const res = await batch.send()
    console.log(res.length,res.length>0)
}

// update('Region',data_up)
update('Background',data_up,'ElementType')

const remove = async (table: string) => {
    const data = await pb.collection(table).getFullList()
    const batch = pb.createBatch()
    data.map(item => batch.collection(table).delete(item.id))
    const res = await batch.send()
    console.log(res.length, res.length > 0)
}

// remove('Background')
// remove('Region')
