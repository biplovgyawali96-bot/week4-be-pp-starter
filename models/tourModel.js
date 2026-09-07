let tourArray = [];
let nextId = 1;

const getAll = () => {
  return tourArray;
};

const addOne = (
  name,
  info,
  image,
  price,
  duration,
  groupSize,
  rating,
  availability
) => {
  if (
    !name ||
    !info ||
    !image ||
    !price ||
    !duration ||
    !groupSize ||
    rating === undefined ||
    availability === undefined
  ) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability,
  };

  tourArray.push(newTour);

  return newTour;
};

const findById = (id) => {
  const tour = tourArray.find(
    (tour) => tour.id === Number(id)
  );

  return tour || false;
};

const updateOneById = (id, updatedData) => {
  const tour = findById(id);

  if (tour) {
    if (updatedData.name) tour.name = updatedData.name;
    if (updatedData.info) tour.info = updatedData.info;
    if (updatedData.image) tour.image = updatedData.image;
    if (updatedData.price) tour.price = updatedData.price;
    if (updatedData.duration) tour.duration = updatedData.duration;
    if (updatedData.groupSize) tour.groupSize = updatedData.groupSize;
    if (updatedData.rating !== undefined) {
      tour.rating = updatedData.rating;
    }
    if (updatedData.availability !== undefined) {
      tour.availability = updatedData.availability;
    }

    return tour;
  }

  return false;
};

const deleteOneById = (id) => {
  const tour = findById(id);

  if (tour) {
    const initialLength = tourArray.length;

    tourArray = tourArray.filter(
      (tour) => tour.id !== Number(id)
    );

    return tourArray.length < initialLength;
  }

  return false;
};

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};