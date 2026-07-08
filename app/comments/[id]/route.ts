import { comments } from "../data";

export async function PATCH(
  request: Request,
  { params }: RouteContext<"/comments/[id]">,
) {
  const { id } = await params;
  const body = await request.json();

  const comment = comments.find((comment) => comment.id === Number(id));

  if (!comment) {
    return new Response(`Comment with id ${id} not found`, { status: 404 });
  }

  comment.text = body;

  return Response.json(comment);
}

export async function DELETE(
  request: Request,
  { params }: RouteContext<"/comments/[id]">,
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === Number(id));

  if (index === -1) {
    return new Response(`Comment with id ${id} not found`, { status: 404 });
  }

  const [deletedComment] = comments.splice(index, 1);

  return Response.json(deletedComment);
}
