class User {
  constructor({ id, name, email, password, l_id }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.leagueId = l_id;
  }
}

module.exports = User;
