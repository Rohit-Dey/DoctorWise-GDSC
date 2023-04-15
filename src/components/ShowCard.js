import DoctorCard from "./DoctorCard"
import './Finddoctor.css'

const ShowCard = (props) => {
    console.log("inside")
    console.log(props.data)
    return (props.data.map((doctor) => (<li key={doctor._id}>
            <DoctorCard
                name={doctor.name}
                age={doctor.age}
                pictureUrl={doctor.imageUrl}
                city={doctor.city}
                specialty={doctor.specialty}
                experience={doctor.experience}
                clinicName={doctor.workplace}
                rating={doctor.rating} />
        </li>)
    ));
}

export default ShowCard;