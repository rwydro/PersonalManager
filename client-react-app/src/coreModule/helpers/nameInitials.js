const createNameInitials = name => {
  let nameInitials = name.split(' ').map(word => word.charAt(0).toUpperCase()).join('')
  if(nameInitials > 2) {
      nameInitials = nameInitials.slice(0,2);
  }
  return nameInitials;
};

export default createNameInitials;