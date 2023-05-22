import React from "react";
import "./styles.css";

function TvShowHome(prop) {
  return (
    <>
      <header>
        <h2 className="font-bold text-lg m-2 text-center">TV Show</h2>
      </header>

      <section>
        <div className="bg-gray-100 pt-5 gap-4 mb-5 flex-wrap flex  justify-center items-center">
          {prop.shows.map((show, key) => (
            <>
              <div key={key}>
                <div className="w-60 p-5 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                  <img
                    className="rounded-xl"
                    src={show.show.image.medium}
                    alt={show.name}
                  />
                  <div className="p-2">
                    <div className="flex justify-between">
                      <h2 className="text-lg font-bold mb-2">{show.name}</h2>
                      <span className="text-right">
                        {show.airdate}
                        {show.airtime}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ">
                      {show.show.summary.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                  </div>
                  <div className="m-2">
                    <button
                      onClick={() => prop.handleShowClick(show, key)}
                      className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      <footer>
        <div className="flex m-6  justify-center items-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 mr-3 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={prop.handleLoadPrevious}
            disabled={prop.startIndex === 0}
          >
            Prev
          </button>
          {prop.startIndex + 10 < 100 && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={prop.handleLoadMore}
            >
              Next
            </button>
          )}
        </div>
      </footer>
    </>
  );
}
export default TvShowHome;
