javascript: (function () {
    let comments = [];
    let index = 0;
    $('.js-score').each(function (i) {
        const elem = $(this);
        const val = $(this).text();
        const comment = elem.closest('.comment');
        if (!comment) return;
        comments.push(comment);
        if (Math.abs(val) >= 7) {
            if (index) {
                comments[index - 1].show();
            }
        } else {
            comment.hide();
        }
        ++index;
    });
    const toHide = ['layout__row_promo-blocks', 'column-wrapper_post-additionals', 'similar-posts', 'sidebar_right', 'layout__row_footer-links'];
    for (const i of toHide) {
        const className = '.' + i;
        $(className).hide();
    }
})();
