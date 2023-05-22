import React from "react";

function TvShowDetail(prop) {
  return (
    <>
      <div className="bg-gray-100 p-5 gap-4 flex-wrap flex justify-center items-center">
        {prop.selectedShow && (
          <div className="m-4">
            <div className=" p-5 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-5">
                Programme Detail ({prop.shows[prop.particularKey].name})
              </h2>
              <div className="p-2">
                <div className="flex justify-between">
                  <h2 className="text-lg font-bold mb-2">
                    {prop.shows[prop.particularKey].name}
                  </h2>
                  <p className="text-right">
                    {prop.shows[prop.particularKey].airdate}
                    {prop.shows[prop.particularKey].airtime}
                  </p>
                </div>
              </div>

              <div className="clear-both">
                <img
                  src={prop.selectedShow.image?.medium}
                  alt={prop.selectedShow.name}
                  className="rounded-xl m-10 w-60 flex flex-warp items-center  float-right"
                />

                <div className="mb-3 mt-10 ">
                  <span className="text-white  uppercase bg-orange-600 text-base px-3 py-2 rounded-md">
                    TYPE : {prop.selectedShow.type}
                  </span>
                </div>
                <div className="mb-3 mt-5 ">
                  <span className="text-white uppercase bg-orange-600 text-base px-3 py-2 rounded-md">
                    LANGUAGE : {prop.selectedShow.language}
                  </span>
                </div>
                <div className="mb-3 mt-5 ">
                  <span className="text-white uppercase bg-sky-500 text-base px-3 py-2 rounded-md">
                    NETWORK : {prop.selectedShow.network?.name}
                  </span>
                </div>

                {/* Geners */}
                <strong className="mt-4">Geners:</strong>
                <div className="mb-3 mt-3 ">
                  <span className="text-white  uppercase bg-purple-500 text-base px-3 py-1 rounded-md">
                    {prop.selectedShow?.genres[0]}
                  </span>
                </div>
                <span className="text-sm overflow-ellipsis overflow-hidden ">
                  {prop.selectedShow.summary.replace(/(<([^>]+)>)/gi, "")}
                </span>

                <h2 className="text-1xl mb-3 mt-3">
                  Schedule : {prop.selectedShow.schedule.time}
                </h2>

                {prop.selectedShow.schedule.days.map((day, id) => {
                  return (
                    <>
                      <span key={id} className="text-justify uppercase pr-3">
                        {day}
                      </span>
                    </>
                  );
                })}

                <div className="mt-5">
                  <a href={prop.selectedShow.url} className="underline ">
                    Click here for Office Site
                  </a>

                  <div className="mt-3">
                    <a
                      href={prop.shows[prop.particularKey].url}
                      className="underline "
                    >
                      Click to watch on site.
                    </a>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="mt-5">
                <a href={prop.shows[prop.particularKey]._links.previousepisode}>
                  <button className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
                    Previous Episode
                  </button>
                </a>

                <a
                  href={prop.shows[prop.particularKey]._links.nextepisode}
                  className="float-right"
                >
                  <button className="text-white  bg-amber-500 px-3 py-1 rounded-md hover:bg-amber-700">
                    Next Episode
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default TvShowDetail;
