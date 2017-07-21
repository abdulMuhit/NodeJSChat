# Peerchat Written on Phoenix in Elixir

To install on Elixir and Phoenix on Ubuntu

1. Add Erlang Solutions repo: wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && sudo dpkg -i erlang-solutions_1.0_all.debRun: sudo apt-get update 
2. Install the Erlang/OTP platform and all of its applications: sudo apt-get install esl-erlang 
3. Install Elixir: sudo apt-get install elixir 
4. If you receive the error ‘the task phoenix.server could not be found the first time you attempt mix phoenix.server, run the archive. mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez




To start your Phoenix app:

  * You might need to use sudo for some commands.

  * Install dependencies with `mix deps.get`
  * Set your DB password in config/dev.exs
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `npm install`
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Troubleshooting

1. I had to upgrade Elixir on my OSX desktop.

brew update

brew upgrade elixir

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
