
function postAPI() {
    let arrNguoiDung = document.getElementsByTagName("input");
    console.log(arrNguoiDung);
    let email = arrNguoiDung[0].value;
    let password = arrNguoiDung[1].value;
    let ConfirmPass = arrNguoiDung[2].value;
    let name = arrNguoiDung[3].value;
    let phone = arrNguoiDung[4].value;
    let flexRadioDefault1 = arrNguoiDung[5].checked;
    let flexRadioDefault2 = arrNguoiDung[6].checked;
    let genderInput = '';
    let allChecked = false;
    // let regexEmail = /^[a-zA-Z0-9._%+-]{1,18}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/;
    let regexEmail = /^\w+@\w+\.com$/i;
    let regrexName = /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/;
    // let regexPhone1 = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    let regexPhone2 = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    let regexPass = /[a-zA-Z0-9]{8,}/;
    if (email == '' || password == '' || ConfirmPass == '' || name == '' || phone == '') {
        alert('vui lòng không bỏ trống !!')
        return;
    };
    if (flexRadioDefault1) {
        genderInput = 'true';
    } else if (flexRadioDefault2) {
        genderInput = 'false';
    };
    if (!regexEmail.test(email)) {
        alert('Vui Lòng Nhập Đúng Định dạng Email !!')
        return;
    };
    if (!regexPass.test(password)){
        alert('mật khẩu có độ dài ít nhất 8 ký tự !!')
        return;
    };
    if (password != ConfirmPass) {
        alert('Mật Khẩu Không giống nhau !!')
        return;
    };
    if (!regrexName.test(name)) {
        alert('Yêu Cầu Nhập Đúng Tên!!')
        return;
    }
    if (isNaN(phone)) {
        //is not a number
        alert("Vui Lòng Không Có Chữ trong số điện thoại!!");
        return;
    };
    if(!regexPhone2.test(phone)){
        alert("Vui Lòng Nhập Đúng Số Điện Thoại !!")
        return;
    }
    //call API:
    let dataRegrister = {
        "email": email,
        "password": password,
        "name": name,
        "gender": genderInput,
        "phone": phone,
    };
    let promise = axios({
        method: 'POST',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: dataRegrister,
    });
    promise.then((result) => {
        console.log(result);
        result.data.content.message;
    });
    promise.catch((err) => {
        console.log(err);
    })

    let json = JSON.stringify(dataRegrister);
    alert("Đăng Ký Thành Công !!");

    // confirm('xác nhận thông tin đăng ký\n'+email+"\n"+password+"\n"+ConfirmPass+"\n"+name+"\n"+phone+"\n"+flexRadioDefault1+"\n"+flexRadioDefault2)
};