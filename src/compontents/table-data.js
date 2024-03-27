import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function TableData() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [offset, setOffset] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [load, setLoad] = useState(false);
  const baseUrl = `http://fe-test.dev.rampnow.io:8000/api/books?page=${offset}&limit=${perPage}`;

  const loader = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      console.log(response.data);
      setData(response.data.data);
      setTotalCount(response.data.count);
      setLoad(false);
      setPageCount(Math.ceil(response.data.count / perPage));
    } catch (error) {
      console.log(error);
      setLoad(true);
    }
  };

  useEffect(() => {
    loader();
  }, [offset])// eslint-disable-line react-hooks/exhaustive-deps

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };


  return (
    <div className="table-wrapper">
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Author</th>
              <th scope="col">Country</th>
              <th scope="col">Language</th>
              <th scope="col">Link</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td >{item.id}</td>
                  <td >{item.author}</td>
                  <td >{item.country}</td>
                  <td >{item.language}</td>
                  <td >
                    <a href={item.link}>{item.link}</a>
                  </td>
                  <td >{item.title}</td>
                  <td >{item.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <div className="pagination-wrapper">
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((perPage) => {
            return (
              <option key={perPage} value={perPage}>
                {" "}
                Show {perPage}
              </option>
            );
          })}
        </select>

        <ul className="list-header">
          <li>
            Count <strong>{totalCount}</strong>
          </li>
        </ul>
        <p>
          Page{" "}
          <strong>
            {offset} of {pageCount}
          </strong>
        </p>
        <ReactPaginate
          previousLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={10}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
