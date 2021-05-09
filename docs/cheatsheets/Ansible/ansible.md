---
title: Ansible
category: Ansible
---

## Getting started

### Hosts

```bash
sudo mkdir /etc/ansible
sudo vim /etc/ansible/hosts

  [example]
  192.0.2.101
  192.0.2.102
```

### Running a playbook

```bash
ansible-playbook playbook.yml
```

## Tasks

```yaml
- hosts: all
  user: root
  sudo: no
  vars:
    aaa: bbb
  tasks:
    - ...
  handlers:
    - ...
```

### Includes

```yaml
tasks:
  - include: db.yml
handlers:
  - include: db.yml user=timmy
```

## Handlers

```yaml
handlers:
  - name: start apache2
    action: service name=apache2 state=started

tasks:
  - name: install apache
    action: apt pkg=apache2 state=latest
    notify:
      - start apache2
```

## Vars

```yaml
- host: lol
  vars_files:
    - vars.yml
  vars:
    project_root: /etc/xyz
  tasks:
    - name: Create the SSH directory.
      file: state=directory path=${project_root}/home/.ssh/
      only_if: "$vm == 0"
```

## Roles

```yaml
- host: xxx
  roles:
    - db
    - { role:ruby, sudo_user:$user }
    - web

# Uses:
# roles/db/tasks/*.yml
# roles/db/handlers/*.yml
```

### Task: Failures

```yaml
- name: my task
  command: ...
  register: result
  failed_when: "'FAILED' in result.stderr"

  ignore_errors: yes

  changed_when: "result.rc != 2"
```

### Env vars

```yaml
vars:
  local_home: "{{ lookup('env','HOME') }}"
```

## References

* [Intro](http://www.ansibleworks.com/docs/intro_configuration.html)
* [Modules](http://www.ansibleworks.com/docs/modules.html)
