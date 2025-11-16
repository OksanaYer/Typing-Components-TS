// components/ProfileCard.tsx
// This component should receive a `user` object with `name` (string) and `age` (number)
type User = {
  name: string;
  age: number;
};

type UserProps= {
  user:User;
};


const ProfileCard = ({ user }: UserProps) => {
  return (
    <p>
      {user.name} is {user.age} years old
    </p>
  );
};

export default ProfileCard;

