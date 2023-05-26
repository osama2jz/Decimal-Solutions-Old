import { Button, CopyButton, Select } from "@mantine/core";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
const jobs = [
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
];

const JobPosting = ({ title, type, seats }) => {
  const navigate=useNavigate()
  return (
    <div className="w-full flex-1 aspect-[1.4] flex flex-col items-center justify-center gap-[10px] rounded-[24px] border-2 border-boxColor md:py-[30px]">
      <h1 className="font-semibold sm:text-[30px] md:mt-0 sm:py-3">{title}</h1>
      <p className="2xl:text-[24px]">Type: {type}</p>
      <p className="2xl:text-[24px]">Vacancy: {seats}</p>
      <button className="bg-accentColor rounded-full text-white font-poppins font-semibold px-[52px] py-[10px]" onClick={()=>navigate('/view-job/hehe')}>
        Read More
      </button>
    </div>
  );
};

const Jobs = ({ title, type, seats }) => {
  return (
    <div>
      <div className="career-Filters">
        <div class="job-heading">
          <div class="jobs-title">
            <span class="job-title"> &lt;&nbsp;Job Filter&nbsp;&gt; </span>
            <h2 className="text-3xl font-bold">
              Find your desired jobs & get recruited!
            </h2>
          </div>
        </div>

        <div className="select-div">
          <Select
            data={["Develpoment", "Designing", "Marketing", "Sales"]}
            placeholder="Category"
            radius="md"
            size="lg"
          />
          <Select
            placeholder="Type"
            data={["Fulltime", "Partime", "Hybrid"]}
            radius="md"
            size="lg"
          />
          <Select
            data={["Islamabad"]}
            placeholder="Location"
            radius="md"
            size="lg"
          />

          <button className="bg-white rounded-lg text-accentColor font-poppins font-semibold px-[52px] py-[10px] hover:opacity-90">
            Filter
          </button>
        </div>
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 w-[80%] m-auto my-20">
        {jobs.map((job) => (
          <JobPosting title={job.title} type={job.type} seats={job.seats} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
