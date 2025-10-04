export default function ScreenSizeLabel() {
    return(
        <div id="wd-screen-size-label">
            <div className="d-block d-sm-none">
                XS - Extra Small (&lt;576px) </div>
            <div className="d-none d-sm-block d-md-none">
                S - Small (≥576px) </div>
            <div className="d-none d-md-block d-1g-none">
                M - Medium (≥768px) </div>
            <div className="d-none d-1g-block d-x1-none">
                L - Large (2992px) </div>
            <div className="d-none d-xl-block d-xxl-none">
                XL - Extra Large (≥1200px) </div>
            <div className="d-none d-xxl-block">
                XXL - Extra Extra Large (≥1400px) </div>
        </div>
    );
}