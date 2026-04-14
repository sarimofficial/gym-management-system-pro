const body = {
  name: 'Test',
  phone: '0300',
  cnic: '123',
  plan: 'monthly',
  planStartDate: '2024-05-01',
  photoUrl: 'data:image/jpeg;base64,' + 'A'.repeat(4 * 1024 * 1024) // 4MB base64 string
};
fetch('http://localhost:3000/api/members', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})
.then(r => r.text())
.then(console.log)
.catch(console.error);
