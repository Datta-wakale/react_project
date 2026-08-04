const apiUrl = "http://localhost:3000/users";

// GET All Users
export const getUsers = async () => {
  const response = await fetch(apiUrl);
  return await response.json();
};

// POST Register User
export const addUser = async (user) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
};

// Login User
export const loginUser = async (email, password) => {
  const response = await fetch(apiUrl);

  const users = await response.json();
  const loggedInUser = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  return loggedInUser;
};

// PUT Update User
export const updateUser = async (id, user) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
};

// DELETE User
export const deleteUser = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};