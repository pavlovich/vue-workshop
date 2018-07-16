export class Task {
  constructor(
    {
      id = null,
      personal = true,
      checked = false,
      owner = null,
      name = '',
      createdAt = Date.now()
    }
  ) {
    Object.assign(this, {id, personal, checked, owner, name, createdAt});
  }
}

export default Task;
