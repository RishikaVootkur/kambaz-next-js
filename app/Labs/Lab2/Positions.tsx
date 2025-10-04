export default function Positions() {
    return (
      <>
        <div id="wd-css-position-relative">
          <h2>Relative</h2>
          <div className="wd-bg-color-gray">
            <div className="wd-bg-color-yellow wd-dimension-portrait">
              <div className="wd-pos-relative-nudge-down-right">Portrait</div>
            </div>
            <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
              Landscape
            </div>
            <div className="wd-bg-color-red wd-dimension-square">Square</div>
          </div>
        </div>
  
        <div id="wd-css-position-absolute">
          <h2>Absolute Position</h2>
          <div className="wd-pos-relative">
            <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
            <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
            <div className="wd-pos-absolute-120-120 wd-bg-color-red wd-dimension-square">Square</div>
          </div>
        </div>
  
        <div id="wd-css-position-fixed">
          <h2>Fixed position</h2>
          <p>
            Checkout the blue square that says &quot;Fixed position&quot; stuck all the way on the right and halfway down the page.
            It doesn&apos;t scroll with the rest of the page. Its position is &quot;Fixed&quot;.
          </p>
          <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">Fixed position</div>
        </div>
      </>
    );
  }