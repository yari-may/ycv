$(document).ready(function () {
    $.getJSON("./data/cvData.json", function (json) {
        $('#name').html(json.cvData.name);
        $('#address').html(json.cvData.address);
        $('#city').html(json.cvData.city);
        $('#phone').html(json.cvData.phone);
        $('#birth').html(json.cvData.birth);
        $('#maritalStatus').html(json.cvData.maritalStatus);
        $('#nationality').html(json.cvData.nationality);
        $('#email').html(json.cvData.email);

        json.cvData.education.slice().reverse().forEach(function (element) {
            $('#education').after(
                '    <div class="row">\n' +
                '        <div class="col-sm-3">\n' +
                element.date +
                '        </div>\n' +
                '        <div class="col-sm-9">\n' +
                '            <div class="font-weight-bold">' + element.title + '</div>\n' +
                '            <div>' + element.school + '</div>\n' +
                '        </div>\n' +
                '    </div>'
            )
        });

        json.cvData.workExperience.slice().reverse().forEach(function (element, i) {
            console.log(i);
            $('#workExpirience').after(
                '        <div class="row">\n' +
                '            <div class="col-sm-3">\n' +
                '                <div>' + element.date + '</div>\n' +
                '                <div>' + element.percentage + '</div>\n' +
                '            </div>\n' +
                '            <div class="col-sm-9">\n' +
                '                <div class="font-weight-bold">' + element.company + '</div>\n' +
                '                <div>' + element.address + '</div>\n' +
                '                <div class="font-italic">' + element.role + '</div>\n' +
                '                <ul class="list-group" id="workExperienceTasks' + i + '">\n' +
                '                </ul>\n' +
                '                <ul class="list-inline" id="workExperienceSkills' + i + '">\n' +
                '                    <li class="list-inline-item font-italic">Skills: </li>\n' +
                '                </ul>\n' +
                '            </div>\n' +
                '        </div>'
            );
            element.tasks.forEach(function (e) {
                $('#workExperienceTasks' + i).append('<li class="list-group-item">' + e + '</li>');
            });
            element.skills.forEach(function (e) {
                $('#workExperienceSkills' + i).append('<li class="list-inline-item font-italic">' + e + '</li>');
            });
        });

        json.cvData.extracurricularActivity.slice().reverse().forEach(function (element, i) {
            $('#extracurricularActivity').after(
                '        <div class="row">\n' +
                '            <div class="col-sm-3">\n' +
                '                <div>' + element.date + '</div>\n' +
                '                <div>' + element.percentage + '</div>\n' +
                '            </div>\n' +
                '            <div class="col-sm-9">\n' +
                '                <div><span class="font-weight-bold">' + element.company + '</span><span>, ' + element.address + '</span></div>\n' +
                '                <div class="font-italic">' + element.role + '</div>\n' +
                '                <ul class="list-group" id="extracurricularActivityTasks' + i + '">\n' +
                '                </ul>\n' +
                '                <ul class="list-inline" id="extracurricularActivitySkills' + i + '">\n' +
                '                    <li class="list-inline-item font-italic">Skills: </li>\n' +
                '                </ul>\n' +
                '            </div>\n' +
                '        </div>'
            );
            element.tasks.forEach(function (e) {
                $('#extracurricularActivityTasks' + i).append('<li class="list-group-item">' + e + '</li>');
            });
            element.skills.forEach(function (e) {
                $('#extracurricularActivitySkills' + i).append('<li class="list-inline-item font-italic">' + e + '</li>');
            });
        });
        console.log("JSON Data: " + json.cvData.name);
    });
});