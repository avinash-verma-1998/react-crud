import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import UserBox from "../components/UserBox";
import { getUsers } from "../fetch";

const UserPage = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
    return () => {};
  }, [page]);

  const handleNext = () => {
    setPage((p) => p + 1);
  };
  const handlePrevious = () => {
    setPage((p) => p - 1);
  };
  return (
    <>
      <h3 className="mt-2 ml-2 has-text-centered title">List of users</h3>
      <Loader isLoading={isLoading} />
      <div className="user-page">
        {isLoading
          ? " "
          : users.map((elem) => (
              <UserBox
                key={elem.id}
                name={elem.name}
                id={elem.id}
                email={elem.email}
                active={elem.status === "active"}
              />
            ))}
      </div>
      <nav
        className="mb-4 ml-4 mr-4 pagination"
        role="navigation"
        aria-label="pagination"
      >
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          className="button is-primary"
        >
          Previous
        </button>
        <p className="page title is-size-5">{page}</p>
        <button onClick={handleNext} className="button is-primary">
          Next page
        </button>
      </nav>
    </>
  );
};

export default UserPage;
