interface JobPosting {}

interface SearchResult {
	postingID: string
	employer: string
	title: string
	brief: string
	skills: string[]
	location: string
	compensation: string
	isSaved?: boolean
}
