try {    
    let deptSelect = document.getElementById("deptSelect");
    let deptValue = deptSelect.value;
    deptSelect.addEventListener("onchange", loadtable);
    function loadtable() {
        let tbl1 = document.getElementById("tbl1")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let List = JSON.parse(this.responseText);                
                let item = List.list;
            
                deptValue = deptSelect.value;                
                let output = "<tr><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
                for (let i = 0; i < item.length; i++) {
                    if (deptValue == "all") {
                        output += "<tr>";
                        output += "<td>" + item[i].Name + "</td>";
                        output += "<td>" + item[i].Quantity + "</td>";
                        output += "<td>" + item[i].Unit + "</td>";
                        output += "<td>" + item[i].Department + "</td>";
                        output += "<td>" + item[i].Notes + "</td>";
                    }
                    else if (deptValue == item[i].Department) {
                        output += "<tr>";
                        output += "<td>" + item[i].Name + "</td>";
                        output += "<td>" + item[i].Quantity + "</td>";
                        output += "<td>" + item[i].Unit + "</td>";
                        output += "<td>" + item[i].Department + "</td>";
                        output += "<td>" + item[i].Notes + "</td>";
                    }

                }

                tbl1.innerHTML = output;
            }
        }
        xhttp.open("GET", "list.json", true);
        xhttp.send();
    }
}
catch (e) {
    document.getElementById("listdiv").innerHTML = e;
}

