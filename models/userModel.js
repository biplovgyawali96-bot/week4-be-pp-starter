let users = [
  {
    id: 1,
    name: "Matti Seppänen",
    email: "matti@example.com",
    password: "M@45mtg$",
    phone_number: "+358401234567",
    gender: "Male",
    date_of_birth: "2000-01-15",
    membership_status: "Active",
    account_verified: true,
    country: "Finland"
  }
];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === Number(id));
};

const createUser = (user) => {
  const newUser = {
    id: users.length + 1,
    ...user
  };

  users.push(newUser);

  return newUser;
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  users[index] = {
    ...users[index],
    ...updatedUser
  };

  return users[index];
};

const deleteUser = (id) => {
  const index = users.findIndex(
    (user) => user.id === Number(id)
  );

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);

  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};