defmodule Peerchat.PageController do
  use Peerchat.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
