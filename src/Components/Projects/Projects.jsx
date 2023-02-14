import React, { useEffect, useState } from "react";
import coins from "../SourceFiles/Images/cryptocurrency.jpg";
import agriculture from "./../SourceFiles/Images/fields.jpg";
import build from "./../SourceFiles/Images/build.jpg";
import graphs from "./../SourceFiles/Images/123.png";

const Projects = () => {
  const [type, setType] = useState();

  const getLink = () => {
    const url = `${window.location.href}`;
    const part = url.split("?");
    const path = part[1];
    handleClickScroll(path);
  };

  const handleClickScroll = (path) => {
    const element = document.getElementById(`${path}`).offsetTop;
    window.scrollTo({
      top: element - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getLink();
    // handleClickScroll()
  }, []);

  return (
    <div>
      <div className="bgheading">
        <div className="headingtext container">
          <div className="fw-bold fs-5 display-3 lh-sm text-center container">
            <p className="text-white" style={{ fontSize: "60px" }}>
              Our Projects
            </p>
          </div>
          <p
            style={{ fontSize: "20px" }}
            className="textDemo text-center container text-white"
          >
            We invest in three major categories i.e. Stocks and share trading,{" "}
            <br /> Real Estate Investment & Agriculture crops.
          </p>
        </div>
      </div>

      <div>
        <div className="row mt-5 mb-5 m-5" id="stock">
          <div className="col-lg-7">
            <h1 className="" style={{ color: "#cfcfcf" }}>
              Stocks and Shares Trading:
            </h1>
            <p className="textDemo">How Stock market works?</p>
            <p className="textDemo">
              The Stock markets are the largest financial market in the world.
              The total market capitalization of the U.S. stock market is
              currently $40,511,838.8 million as of December 31st, 2022. Trading
              in the stocks is not done at one central location but is conducted
              between participants through electronic communication networks
              (ECNs) and phone networks in various markets around the world. We
              trade in NYSE and hold $159.33 million worth of stocks. <br />
              The cornerstone of the NYSE market model is the Designated Market
              Maker (DMM). DMMs have obligations to maintain fair and orderly
              markets for their assigned securities. They operate both manually
              and electronically to facilitate price discovery during market
              opens, closes and during periods of trading imbalances or
              instability. This high-touch approach is crucial for offering the
              best prices, dampening volatility, adding liquidity and enhancing
              value. <br />
              DMMs apply their market experience and judgment of dynamic trading
              conditions, macroeconomic news and industry-specific intelligence,
              to inform their decisions. A valuable resource for our
              listed-company community, DMMs offer insights, while making
              capital commitments, maintaining market integrity, and supporting
              price discovery. <br />
              We stand new companies by funding them as DMMs and trade shares
              afterwards on the longer run.
            </p>
          </div>
          <div className="col-lg-5" style={{ position: "relative" }}>
            <img
              src={graphs}
              className="img-fluid "
              style={{ marginTop: "100px" }}
              alt=""
            />
          </div>
        </div>

        <div className="row mt-4 mb-5 m-5" id="realEstate">
          <div className="col-lg-5" style={{ position: "relative" }}>
            <img src={build} className=" img-fluid" alt="" />
          </div>
          <div className="col-lg-7">
            <h1 className="" style={{ color: "#cfcfcf" }}>
              Real Estate Investments:
            </h1>
            <p className="textDemo">
              A Real Estate entrepreneur or a Real Estate Investor to a lesser
              extent is someone who actively or passively invests in real
              estate. An active investor may buy a property, make repairs and/or
              improvements to the property, and sell it later for a profit.{" "}
              <br />
              We rent out various properties commercial and residential both and
              generate revenue for our clients. Invest in new development
              projects and resell it with a great margin in NY and other several
              regions in US. <br />
              Moreover, we are diversifying in one of the most amazing growths
              in property rates in the market of Dubai, Canada and Netherlands
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5 m-5" id="crops">
          <div className="col-lg-8">
            <h1 className="" style={{ color: "#cfcfcf" }}>
              {" "}
              Agriculture:
            </h1>
            <p className="textDemo">
              PL Share invests in crops for high yields. Mainly investing in
              technology-related farms such as Greenhouse farming, can be
              accomplished using multiple types of structures, depending on the
              goal and needs of the farming operations. They vary depending on
              the system, the material used to cover them and the construction
              technique. <br />
              Simple greenhouse structures can be built at a relatively small
              expense, helping small, beginning farmers and smallholder farms in
              developing nations extend their season and produce more food.
              Simple greenhouse structures can be built for just a few thousand
              dollars depending on the size and materials needed. <br />
              At the other extreme are high-tech controlled greenhouse
              structures replicated and managed at scale across multiple
              locations using farm management software. Commercial greenhouses
              can cost millions of dollars to build and are typically installed
              with high-tech management systems, including heat and humidity
              control, lighting, drip irrigation and fertigation, misting
              systems and automated benching systems for moving potted plants.{" "}
              <br />
              <br />
              Why do we invest in crops? <br />
              ◯ Extreme weather conditions like windstorms, drought, cold snaps
              and heat waves are mitigated. <br />
              ◯ Extend seasonality of crop production. <br />
              ◯ Higher-yielding crops and stable crop production. <br />
              ◯ Easier pest management and good protection from destructive
              animals like deer or rabbits. <br />
              ◯ Supports growing high-value crops and hard-to-find plant
              species. <br />
              ◯ Water consumption, pesticide and fertilizer use can be reduced.{" "}
              <br />◯ Maximum profit in a small space.{" "}
            </p>
          </div>
          <div className="col-lg-4" style={{ position: "relative" }}>
            <img
              src={agriculture}
              style={{ maxHeight: "650px" }}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className="row mt-5 mb-5 m-5">
          <div className="col-lg-4" style={{ position: "relative" }}>
            <img
              src={coins}
              className="img-fluid"
              style={{ maxHeight: "450px" }}
              alt=""
            />
          </div>
          <div className="col-lg-8">
            <h1 className="" style={{ color: "#cfcfcf" }}>
              {" "}
              Cryptocurrency History:
            </h1>
            <p className="textDemo">
              For the first time the term "cryptocurrency" appeared in 2009, due
              to the appearance of the payment system "bitcoin", developed until
              now unknown man or maybe even a group of people under the
              pseudonym Satoshi Nakamoto (Eng. Satoshi Nakamoto). <br />
              In the first year of bitcoin is not represented almost no value,
              the rate fluctuated between 700 - 1600 btc for 1 US dollar. Over
              the next four years the situation has changed many times, there
              were ups and downs. <br />
              2013 became fatal for bitcoin. At the beginning of the year it was
              breaking the mark of $ 31 for 1 bitcoin, just after 2 months’ rod
              has risen to $ 100, and by the end of the year the course was
              already unbelievable $ 1200 per electronic coin! <br />
              Today the market replenished with many new cryptocurrency, some of
              them are already entrenched in the market, while others are just
              beginning their way to conquer the peaks, "survive" certainly not
              all, but as practice shows in recent years, cryptocurrency already
              firmly entrenched in the global economy, and deserves proper
              attention. <br />
              Who knows, maybe after some time cryptocurrency generally replace
              familiar to us with your money, at least looking at the current
              trends, such a scenario would not be a big surprise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
