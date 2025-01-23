import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false)
pb.collection('_superusers').authWithPassword('deniz8011@gmail.com', 'Deniz436230079!', {
    // This will trigger auto refresh or auto reauthentication in case
    // the token has expired or is going to expire in the next 30 minutes.
    autoRefreshThreshold: 30 * 60
  })


// const admin = await pb.collection('users').impersonate(pb.authStore.record?.id||'', 3600)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJwYmNfMzE0MjYzNTgyMyIsImV4cCI6MTc2OTA3NDYzNSwiaWQiOiI2eHdkMzMxb2UzczNuODQiLCJyZWZyZXNoYWJsZSI6ZmFsc2UsInR5cGUiOiJhdXRoIn0.CYBBJiCf8kwBu73HjI4lLfXImU5oWucdnct_Q-M9vSk";

pb.authStore.save(token, null);
// pb.authStore.save(admin.authStore.token, null);

console.log(pb.authStore.record,'s')

export default pb


