
export default async function SubscriptionsPage(param: { searchParams: Promise<Record<string, string>>; }) {
	const searchParam = await param.searchParams;

	return (
		<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			{
				searchParam.list === "LL" ?
					<h1 className="text-5xl">Liked Video</h1> :
					<h1 className="text-5xl">Watch Later</h1>
			}
		</main>
	);
}