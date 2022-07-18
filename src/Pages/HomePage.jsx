import SearchButton from "../components/SearchButton";
import SearchResults from "../components/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import { changePopularValue } from "../reduxStore/trendValue";
import Card from "../components/Card";
import { Button } from "../styledComponents/ButtonStyled";
import { ContainerStyled } from "../styledComponents/ContainerStyled";
import { CardContainer } from "../styledComponents/CardStyled";
import { useQuery } from "react-query";
import { fetchPopularMovies } from "../data";
import NotFound from "../components/NotFound";
function HomePage() {
  const { trend, search } = useSelector((state) => state);

  const dispatch = useDispatch();

  const popularMovies = useQuery(["movies", trend], () => fetchPopularMovies(trend), {
    select: (data) => data.data.results,
    retry: false,
  });


  return (
    <ContainerStyled>
      <div className="container">
        <SearchButton
        // handleReset={handleReset}
        />
      </div>

      {search !== "" ? (
        <SearchResults />
      ) : (
        <>
          <br />
          <div className="container">
            <div className="title d-flex m-2">
              <h2>POPULAR MOVIES</h2>
              <div className="btn-group ms-auto">
                <Button
                  className={`btn btn-secondary ${
                    trend === "day" ? "active" : null
                  }`}
                  onClick={() => dispatch(changePopularValue("day"))}
                >
                  Today
                </Button>
                <Button
                  className={`btn btn-secondary ${
                    trend === "week" ? "active" : null
                  }`}
                  onClick={() => dispatch(changePopularValue("week"))}
                >
                  Last Week
                </Button>
              </div>
            </div>
            <CardContainer>
              {popularMovies?.data?.map((item) => (
                <Card item={item} />
              ))}
            </CardContainer>
            {popularMovies.data?.length === 0 && <NotFound />}
          </div>
        </>
      )}
    </ContainerStyled>
  );
}

export default HomePage;
