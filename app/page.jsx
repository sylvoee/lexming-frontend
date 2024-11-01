let getAllUsersProfile =async()=>{
  let response = await fetch('http://localhost:5000/all-profile', {
    method: "GET",
    next :{
      revalidate : 5000
    }
  });
  try {
    return response.json();
  } catch (error) {
    console.log(err)
  }
  }

  let getAUserProfile =async(id)=>{
    let response = await fetch(`http://localhost:5000/a-profile/${id}`, {
      method: "GET"
    });
  
      try {
        return response.json();
      } catch (error) {
        console.log(err)
      }
   
    }
  


export default async function Home() {
  let profiles = await getAllUsersProfile();

  // let aProfile  = await getAUserProfile('671f8a023c28f77317330dec');
  // console.log(aProfile);

  return (
    <div>
      {/* <h3>{aProfile.docs[0].user.name}</h3>
      <h3>{aProfile.docs[0].gender}</h3> */}
    {profiles.docs.map(aPerson => {
       return(
       <div key={aPerson._id}>
         <h3>{aPerson.user.name}</h3>
         <p>Nationality : {aPerson.nationality}</p>
         <p>DOB : {aPerson.DOB}</p>
         <p>Highest Level of Education : {aPerson.highestLevelOfEducation}</p>
         <p>Present Location : {aPerson.stateYouAreLiving}</p>
         <p>Your Prefered Relationship : {aPerson.yourPreferedTypeOfRelaionship}</p>
         <hr />
         
         </div>
       )
    })}

    </div>
  );
}
