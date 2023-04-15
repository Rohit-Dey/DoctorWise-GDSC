import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import SearchButton from "./SearchButton";
import DoctorCard from './DoctorCard'
import './Finddoctor.css'

const doctor = {
  name: 'Dr. John Doe',
  pictureUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  specialty: 'Cardiology',
  clinicName: 'ABC Clinic'
};

const people = [
  { id: 1, name: "Allergist/Immunologist" },
  { id: 2, name: "Anesthesiologist" },
  { id: 3, name: "Cardiologist" },
  { id: 4, name: "Dermatologist" },
  { id: 5, name: "Colon/ Rectal Surgeon" },
  { id: 6, name: "Medicine Specialist" },
  { id: 7, name: "Family Physician" },
  { id: 8, name: "Gastroenterologist" },
  { id: 9, name: "Gynecologist" },
  { id: 10, name: "Hematologist" },
  { id: 11, name: "Nephrologist" },
  { id: 12, name: "Neurologist" },
  { id: 13, name: "Oncologist" },
  { id: 14, name: "Ophthalmologist" },
  { id: 15, name: "Pathologist" },
  { id: 16, name: "Psychiatrist" },
  { id: 17, name: "Pulmonologist" },
  { id: 18, name: "Radiologist" },
  { id: 19, name: "Rheumatologist" },
  { id: 20, name: "Urologist" },
];

export default function Example() {
  const [selected, setSelected] = useState(people[0]);
  const [showResult, setShowResult] = useState(false);
  const [query, setQuery] = useState("");

  const clickHandler = () => {
    setShowResult(true)
  }

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-14">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-4 pl-3 pr-10 text-lg leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="relative mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"
                            }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"
                              }`}
                          >
                            <CheckIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <SearchButton onClick={clickHandler} />
      {showResult && 
        <ul>
        <li><DoctorCard
        name={doctor.name}
        pictureUrl={doctor.pictureUrl}
        specialty={doctor.specialty}
        clinicName={doctor.clinicName}
      /></li>
      <li><DoctorCard
        name={doctor.name}
        pictureUrl={doctor.pictureUrl}
        specialty={doctor.specialty}
        clinicName={doctor.clinicName}
        /></li></ul>
      }
    </>
  );
}