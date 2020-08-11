$("form").submit(function (evt) {
    evt.preventDefault();
    let names = $("#names").val().trim().split("\n");
    let chat = $("#chat").val();
    chat = chat.toLowerCase();
    let students = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i].toLowerCase().trim();
        if (name != "") {
            if (chat.includes(name)) {
                students.push({ name: name, present: "x" });
            } else {
                students.push({ name: name, present: false });
            }
        }
    }
    let html = [];
    for (x in students) {
        html.push(`<tr>
        <th scope="row">${x}</th>
        <td>${students[x].name}</td>
        <td></td>
        <td>${students[x].present}</td>
      </tr>`);
    }
    $("tbody").html(html.toString());
})

