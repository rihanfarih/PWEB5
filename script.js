function validate() {
    if( document.form.nama.value == "" ) {
        alert( "Silahkan isi nama anda!" );
        document.form.nama.focus() ;
        return false;
    }

    if(document.form.nrp){
        if(document.form.nrp.value == ""){
            alert("Silahkan isi nrp anda!");
            document.form.nrp.focus();
            return false;
        }
        if(document.form.nrp.value != "" && !/^[0-9]+$/.test(document.form.nrp.value)){
            alert("isi nrp anda dengan angka");
            document.form.nrp.focus() ;
            return false;
        }
    }
    
    if( document.form.email.value == "" ) {
        alert( "Silahkan isi email anda!" );
        document.form.email.focus() ;
        return false;
    }

    if( document.form.domisili.value == "" ) {
        alert( "Silahkan isi domisili anda!" );
        document.form.domisili.focus() ;
        return false;
    }

    if( document.form.jurusan.selectedIndex < 1 ) {
        alert( "Silahkan pilih asal jurusan anda!" );
        document.form.jurusan.focus() ;
        return false;
    }

    if( document.form.status_vaksin.selectedIndex < 1 ) {
        alert( "Silahkan pilih status vaksin anda!" );
        document.form.status_vaksin.focus() ;
        return false;
    }

    if( document.form.status_vaksin.value == "1" && document.form.status_penyintas.selectedIndex < 1) {
        alert( "Silahkan pilih status penyintas anda!" );
        document.form.status_penyintas.focus() ;
        return false;
    }

    if( document.form.status_vaksin.value == "1" && document.form.status_penyintas.value == "2" && trimfield(document.form.alasan.value) == '') {
        alert( "Silahkan isi alasan anda!" );
        document.form.alasan.focus() ;
        return false;
    }

    if((document.form.status_vaksin.value == "2" || document.form.status_vaksin.value == "3") && trimfield(document.getElementById('formFile1').value) == '') {
        alert( "Upload file sertifikat vaksin anda yang pertama!" );
        document.form.status_vaksin.focus() ;
        return false;
    }
    
    if( document.form.status_vaksin.value == "3" && trimfield(document.getElementById('formFile2').value) == '') {
        alert( "Upload file sertifikat vaksin anda yang kedua!" );
        document.form.status_vaksin.focus() ;
        return false;
    }

    // belum berhasil
    if((document.form.status_vaksin.value == "2" || document.form.status_vaksin.value == "3") && (document.getElementById('status_ttm1').value != "ya" && document.getElementById('status_ttm2').value != "tidak")) {
        alert( "Silahkan pilih kebersediaan kuliah tatap muka !" );
        return false;
    }
    //

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Anda tidak dapat merubah setelah submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, submit!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil!',
                text: 'Data anda berhasil disimpan',
                icon: 'success',
                confirmButtonColor: '#3085d6'
            });
            document.form.reset();
            document.getElementById('!isVaksin').style.display = 'none';
            document.getElementById('isVaksin').style.display = 'none';
            document.getElementById('isVaksin-1').style.display = 'none';
            document.getElementById('isVaksin-2').style.display = 'none';
            document.getElementById('!isPenyintas').style.display = 'none';
        }
    });
    return(false);
 }

 function cekStatusVaksin(){
    if (document.form.status_vaksin.value == "1") {
        document.getElementById('!isVaksin').style.display = 'block';
        document.getElementById('isVaksin').style.display = 'none';
        document.getElementById('isVaksin-1').style.display = 'none';
        document.getElementById('isVaksin-2').style.display = 'none';
    }
    else if (document.form.status_vaksin.value == "2") {
        document.getElementById('!isVaksin').style.display = 'none';
        document.getElementById('isVaksin').style.display = 'block';
        document.getElementById('isVaksin-1').style.display = 'block';
        document.getElementById('!isPenyintas').style.display = 'none';
    }
    else if (document.form.status_vaksin.value == "3") {
        document.getElementById('!isVaksin').style.display = 'none';
        document.getElementById('isVaksin').style.display = 'block';
        document.getElementById('isVaksin-1').style.display = 'block';
        document.getElementById('isVaksin-2').style.display = 'block';
        document.getElementById('!isPenyintas').style.display = 'none';
    }
 }

 function validateFileupload(fileName){
    var allowed_extensions = new Array("jpg","png","pdf");
    var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

    for(var i = 0; i <= allowed_extensions.length; i++)
    {
        if(allowed_extensions[i]==file_extension)
        {
            return true; // valid file extension
        }
    }
    alert( "File sertifikat harus jpg, png, atau pdf !" );
    return false;
 }

 function cekPenyintas(){
    if(document.form.status_vaksin.value == "1"){
        if(document.form.status_penyintas.value == "2"){
            document.getElementById('!isPenyintas').style.display = 'block';
        }
        else{
            document.getElementById('!isPenyintas').style.display = 'none';
        }
     }
}

function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}