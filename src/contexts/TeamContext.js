import { createContext, useContext, useState } from "react";
import { mockDataTeam } from "../data/mockData";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState(mockDataTeam);

  const addTeamMember = (newMember) => {
    const formattedMember = {
      id: team.length + 1,
      name: `${newMember.firstName} ${newMember.lastName}`,
      email: newMember.email,
      age: 26, 
      phone: newMember.contact,
      access: "manager", // Default mapped access from Form
    };
    setTeam((prev) => [...prev, formattedMember]);
  };

  const removeTeamMember = (id) => {
      setTeam((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addTeamMember, removeTeamMember }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
