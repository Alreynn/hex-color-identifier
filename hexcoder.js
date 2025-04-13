function color() {
    const input = document.getElementById('input');
    const value = document.getElementById('value');
    
    let color = input.value;
    let backcolor = `#${color}`;
    value.style.backgroundColor = backcolor;
    value.innerText = backcolor;
}