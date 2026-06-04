
fetch('http://localhost:5000/api/projects')
.then(r=>r.json())
.then(data=>{
 document.getElementById('projects').innerHTML =
 '<h2>Projects</h2>' + data.map(p=>`<p>${p.title}</p>`).join('');
});
