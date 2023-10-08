import React, { useState, useEffect } from 'react';
import {Container} from "./AllmembersStyles.js"
import Card from './AllMeberCard';
const url = "https://vasco21.github.io/CPO-API/mymembers.json";

const AllMembers = () => {
  const [loading, setLoading] = useState(true)
  const [members, setJobs] = useState([])

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
       
      </section>
    )
  }

  return (
    <Container className="section">
      <h1 className="msg">Creative Power Organisation Members</h1>
      <div className='Testimonial mtop'>
        <div className='container grid1'>
        {members.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </div>

          
         
  
      </Container>
      
  );
};
export default AllMembers;