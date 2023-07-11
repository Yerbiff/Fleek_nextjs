import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

/// Page Sections
const Metrics= () => {

return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
              <CountUp end={9040} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="leading-relaxed">Opublikowanych postów</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
              <CountUp end={740} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="leading-relaxed">Kampanie reklamowe</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              <CountUp end={415} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="leading-relaxed">Firmy</p>
          </div>
        </div>
      </div>
    </section>
)};

export default Metrics;