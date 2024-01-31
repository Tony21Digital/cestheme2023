define([], function () {
    const _headerLink = document.querySelector('.headerlink');
    const _block = document.querySelector('#account-block');
    const _btn = _block.querySelector('button#acClose');
    const _isMobile = window.matchMedia('(max-width:991px)').matches;

    if (_isMobile) {


        _headerLink.onclick = (c) => {
            _block.classList.toggle('activeblock');
        }

        _btn.onclick = () => {
            _headerLink.click();

        };

    }
});
