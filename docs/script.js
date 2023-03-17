function responsiveMenu(){
    let x = document.getElementById('nav');
    if(x.className===''){
        x.className = 'responsive';
    }else{
        x.className = ''
    }
}

function cerrar(){
    let y = document.getElementById('nav')
    y.className='nav'
    y.className=''
  }
