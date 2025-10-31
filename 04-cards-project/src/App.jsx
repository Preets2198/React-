import React from "react";
import User from "./components/User";
import Card from "./components/Card";
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYMgmPlxU4Yc6_TJI2BvIPYJlSYzNsG3Pfw&s",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },


    
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    },

    {
    brandLogo: "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo.png",
    companyName: "IBM",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Hybrid",
    pay: "$70/hour",
    location: "New York, USA"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adobe_Corporate_wordmark.svg/2560px-Adobe_Corporate_wordmark.svg.png",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Remote",
    pay: "$78/hour",
    location: "San Jose, USA"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Hybrid",
    pay: "$65/hour",
    location: "Stockholm, Sweden"
  },

  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUEoJ1FTFpT3UFKOXghD5jSd1NzzdnvrkUw&s",
    companyName: "Intel",
    datePosted: "2 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Onsite",
    pay: "$82/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhATfvpW1_bf_pWSOVQaz8EsfM4EPF3kDgpw&s",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/32/1/atlassian-logo-png_seeklogo-326273.png",
    companyName: "Atlassian",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Remote",
    pay: "$77/hour",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$84/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/7c/e7/97/7ce797e044a880eb6d74bdec009343bf.jpg",
    companyName: "PayPal",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Hybrid",
    pay: "$92/hour",
    location: "San Jose, USA"
  },

  ];

 
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx) {
       
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post}
      tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo}/>
      </div>
      })}

 </div>
    
  )
}

export default App
