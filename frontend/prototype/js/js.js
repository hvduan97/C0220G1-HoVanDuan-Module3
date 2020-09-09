

$(document).ready(() => {

    $('#createRow').click(() => {
        var newRow = "<tr>" +
            '<td class="add-row"><input type="text" class="form-control form-control-sm"/></td>' +
            '<td class="add-row"><input type="text" class="form-control form-control-sm"/></td>' +
            '<td class="add-row"><input type="text" class="form-control form-control-sm"/></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">LP001</option><option value="Keo">LP002</option></select></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">F1</option><option value="Keo">F2</option></select></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">Thái Bình</option><option value="Keo">Hồ Chí Minh</option></select></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">Máy bay</option><option value="Keo">Xe Máy</option></select></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">Nhân viên 1</option><option value="Keo">Nhân viên 2</option></select></td>' +
            '<td class="add-row"><select class="form-control form-control-sm "><option value="Banh">Bibica</option><option value="Keo">Orion</option></select></td>' +
            '<td class="add-row"><input type="text" class="form-control form-control-sm " /></td>' +
            '<td class="add-row"><input type="text" class="form-control form-control-sm " /></td>' +
            '<td class="add-row"><input type="text" class="form-control form-control-sm " /></td>' +
            '<td><button type="button" class="ibtnDel global-button m-1 button-edit-delete"><i class="fa fa-check"></i></button></td>' +
            '<td><button type="button" class="ibtnDel global-button button-edit-delete"><i class="fa fa-window-close"></i></button></td>' +
            "</tr>";
        $("table tbody").prepend(newRow);
    });



    $('#dataTable').on('click', '.ibtnDel', function (event) {
        $(this).closest('tr').remove();
        // counter -= 1;
    });

});
function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var name=document.getElementById("name_row"+no);
    var date=document.getElementById("date_row"+no);
    var status=document.getElementById("status_row"+no);
    var type=document.getElementById("type_row"+no);
    var store=document.getElementById("store_row"+no);
    var warehouse=document.getElementById("warehouse_row"+no);
    var trans=document.getElementById("trans_row"+no);
    var employee=document.getElementById("employee_row"+no);
    var distributor=document.getElementById("distributor_row"+no);
    var process=document.getElementById("process_row"+no);
    var pan=document.getElementById("pan_row"+no);
    var pay=document.getElementById("pay_row"+no);

    var name_data=name.innerHTML;
    var date_data=date.innerHTML;
    var status_data=status.innerHTML;
    var type_data=type.innerHTML;
    var store_data=store.innerHTML;
    var warehouse_data=warehouse.innerHTML;
    var trans_data=trans.innerHTML;
    var employee_data=employee.innerHTML;
    var distributor_data=distributor.innerHTML;
    var process_data=process.innerHTML;
    var pan_data=pan.innerHTML;
    var pay_data=pay.innerHTML;


    name.innerHTML="<input type='text' class='form-control form-control-sm' id='name_text"+no+"' value='"+name_data+"'>";
    date.innerHTML="<input type='text' class='form-control form-control-sm' id='date_text"+no+"' value='"+date_data+"'>";
    status.innerHTML="<input type='text' class='form-control form-control-sm' id='status_text"+no+"' value='"+status_data+"'>";
    type.innerHTML="<select class='form-control form-control-sm' id='type_text"+no+"' value='"+type_data+"'><option value='LP001'>LP001</option><option value='LP002'>LP002</option></select>";
    // type.innerHTML="<input type='text' class='form-control form-control-sm' id='type_text"+no+"' value='"+type_data+"'>";
    store.innerHTML="<select class='form-control form-control-sm' id='store_text"+no+"' value='"+store_data+"'><option value='F1'>F1</option><option value='F2'>F2</option></select>";
    // store.innerHTML="<input type='text' class='form-control form-control-sm' id='store_text"+no+"' value='"+store_data+"'>";
    warehouse.innerHTML="<select class='form-control form-control-sm' id='warehouse_text"+no+"' value='"+warehouse_data+"'><option value='Thái Bình'>Thái Bình</option><option value='Hồ Chí Minh'>Hồ Chí Minh</option></select>";
    // warehouse.innerHTML="<input type='text' class='form-control form-control-sm' id='warehouse_text"+no+"' value='"+warehouse_data+"'>";
    trans.innerHTML="<select class='form-control form-control-sm' id='trans_text"+no+"' value='"+trans_data+"'><option value='Xe máy'>Xe máy</option><option value='Máy bay'>Máy bay</option></select>";
    // trans.innerHTML="<input type='text' class='form-control form-control-sm' id='trans_text"+no+"' value='"+trans_data+"'>";
    employee.innerHTML="<select class='form-control form-control-sm' id='employee_text"+no+"' value='"+employee_data+"'><option value='Nhân viên 1'>Nhân viên 1</option><option value='Nhân viên 2'>Nhân viên 2</option></select>";
    // employee.innerHTML="<input type='text' class='form-control form-control-sm' id='employee_text"+no+"' value='"+employee_data+"'>";
    distributor.innerHTML="<select class='form-control form-control-sm' id='distributor_text"+no+"' value='"+distributor_data+"'><option value='Bibica'>Bibica</option><option value='Orion'>Orion</option></select>";
    // distributor.innerHTML="<input type='text' class='form-control form-control-sm' id='distributor_text"+no+"' value='"+distributor_data+"'>";
    process.innerHTML="<input type='text' class='form-control form-control-sm' id='process_text"+no+"' value='"+process_data+"'>";
    pan.innerHTML="<input type='text' class='form-control form-control-sm' id='pan_text"+no+"' value='"+pan_data+"'>";
    pay.innerHTML="<input type='text' class='form-control form-control-sm' id='pay_text"+no+"' value='"+pay_data+"'>";
}

function save_row(no)
{
    var name_val=document.getElementById("name_text"+no).value;
    var date_val=document.getElementById("date_text"+no).value;
    var status_val=document.getElementById("status_text"+no).value;
    var type_val=document.getElementById("type_text"+no).value;
    var store_val=document.getElementById("store_text"+no).value;
    var warehouse_val=document.getElementById("warehouse_text"+no).value;
    var trans_val=document.getElementById("trans_text"+no).value;
    var employee_val=document.getElementById("employee_text"+no).value;
    var distributor_val=document.getElementById("distributor_text"+no).value;
    var process_val=document.getElementById("process_text"+no).value;
    var pan_val=document.getElementById("pan_text"+no).value;
    var pay_val=document.getElementById("pay_text"+no).value;

    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("date_row"+no).innerHTML=date_val;
    document.getElementById("status_row"+no).innerHTML=status_val;
    document.getElementById("type_row"+no).innerHTML=type_val;
    document.getElementById("store_row"+no).innerHTML=store_val;
    document.getElementById("warehouse_row"+no).innerHTML=warehouse_val;
    document.getElementById("trans_row"+no).innerHTML=trans_val;
    document.getElementById("employee_row"+no).innerHTML=employee_val;
    document.getElementById("distributor_row"+no).innerHTML=distributor_val;
    document.getElementById("process_row"+no).innerHTML=process_val;
    document.getElementById("pan_row"+no).innerHTML=pan_val;
    document.getElementById("pay_row"+no).innerHTML=pay_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}