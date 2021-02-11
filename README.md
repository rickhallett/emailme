# Emailme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Run

`yarn dev-all`

Todo:

1. Link UI config to controller/service/persistance
2. Link email creation to controller/service/ ?persistance
3. Does using Sqlite allow for an easy switch to elastic? Does Nodemailer interact with elastic out of the box? Abstract DB persistance for swappable approach.
4. Email creator needs to be able to attach more than one email
5. Form/api validation
6. Bunch of flash user notifications for UX feedback

- TODO: storing the actual Mail object from createTransport won't be possible

- Store the stringified version of the configs

- TODO: prevent adding of duplication configurations?

- TODO: configs will need a name, or unique identifier that is human readable

- TODO: bit of research into how we interface with ES from within TDAC and will essentially just be mimicking that
