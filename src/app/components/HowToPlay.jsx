import React, { Fragment } from "react";

export const HowToPlay = () => {
  return (
    <Fragment>
      <div className="container">
        <header className="text-center m-5">
          <h1>Farkel Rules</h1>
        </header>
        <section className="">
          <strong>Object</strong>
          <p>Be the first player to score over 10,000 points</p>
          <strong>Scoring</strong>
          <div className="row">
            <div className="col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <p>Single 1 = 100</p>
                  </tr>
                  <tr>
                    <p>Single 5 = 50</p>
                  </tr>
                  <tr>
                    <p>Three 1's = 300</p>
                  </tr>
                  <tr>
                    <p>Three 2's = 200</p>
                  </tr>
                  <tr>
                    <p>Three 3's = 300</p>
                  </tr>
                  <tr>
                    <p>Three 4's = 400</p>
                  </tr>
                  <tr>
                    <p>Three 5's = 500</p>
                  </tr>
                  <tr>
                    <p>Three 6's = 600</p>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <p>Four of any number = 1,000</p>
                  </tr>
                  <tr>
                    <p>Five of any number = 2,000</p>
                  </tr>
                  <tr>
                    <p>Six of any number = 3,000</p>
                  </tr>
                  <tr>
                    <p>1-6 straight = 1,500</p>
                  </tr>
                  <tr>
                    <p>Three Pairs = 1,500</p>
                  </tr>
                  <tr>
                    <p>Four of any number with pair = 1,500</p>
                  </tr>
                  <tr>
                    <p>Two Triplets = 2,500</p>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
              <h3>For the full rules please visit the official site:  <a href="https://www.playmonster.com/wp-content/uploads/2018/06/Farkle-Rules.pdf">Farkel Rules</a></h3>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
