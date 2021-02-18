# Emailme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Run

`yarn dev-all`

## Handover Notes

The basic approach that was started here was to link a UI to the Nodemailer library. This in turn communicates with any configured and stored SMTP server to send emails.
Functionality was first tested locally (in this case interfacing with Mac OSX postfix) but this could be adapted to the eventual host linux environment.

I started with the intention of keeping the DB persistance and external http layers separate to allow for a more modular internal API. json-server was used for local development; in hindsight there is confusion of ideas here - the email service would be responsible for external network communication, and the config service would be internal to TDAC, just to persist configuration options.

This project was created using the same angular, typescript, node and sails versions at the time of creation.

Todo:

1. Link UI config to controller/service/persistance
2. Link email creation to controller/service/ ?persistance
3. Does using Sqlite allow for an easy switch to elastic? Does Nodemailer interact with elastic out of the box? Abstract DB persistance for swappable approach.
4. Email panel needs to be able to attach more than one email
5. Form/api validation
6. Bunch of flash user notifications for UX feedback
7. Would we need to keep a log of emails sent? Would these need to be accessible to the end user?

- TODO: prevent adding of duplication configurations?

- TODO: configs will need a name, or unique identifier that is human readable

- TODO: bit of research into how we interface with ES from within TDAC and will essentially just be mimicking that
