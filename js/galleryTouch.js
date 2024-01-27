function clickImage(classPrimary) {
    const one = document.querySelector('.one');
    one.classList.remove("touch");
    const two = document.querySelector('.two');
    two.classList.remove("touch");
    const three = document.querySelector('.three');
    three.classList.remove("touch");

    const imageDiv = document.querySelector('.' + classPrimary);
    imageDiv.classList.add("touch");
}