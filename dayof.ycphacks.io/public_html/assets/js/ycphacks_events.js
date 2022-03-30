/* -------------------------------------------------------------
 * YCP Hacks Event List Specification
 * -------------------------------------------------------------
 * YCP_EVTS_YEAR is the year these events take place on.
 * YCP_EVTS is an array of 5-tuples:
 *
 * [0] --> start time relative to midnight Saturday (in hours)
 * [1] --> end time ""
 * [2] --> Brief event title/description
 * [3] --> Brief location of the event
 * [4] --> event type
 *           0: general event
 *           1: workshop/tech talk/etc
 *           2: food event
 */
 <!--HEllo-->
var YCP_EVTS_YEAR = 2018
var YCP_EVTS = [
    	[17, 18.5, "Hacker Check-in & Dinner", "Willman Business Center Lobby", 0, ""],
    	[18.5, 19, "Opening Ceremonies", "Weinstock Auditorium", 0, ""],
	[18.5, 19, "Opening Ceremonies", "Weinstock Auditorium", 1, "Come celebrate the launch of our event with multiple announcements and speakers."],
	[19, 19.5, "Hacking Begins!", "-", 0, ""],
	[19.5, 20.5, "Team Building Activities", "Room 408", 0, ""],
	[19.5, 20.5, "Team Building Activities", "Room 408", 1, "Join Bryce Kruger in fun and games to meet some new people."],
	[20.5, 21, "Idea Building", "Room 408", 0, ""],	
	[20.5, 21, "Idea Building", "Room 408", 1, "Don't know what to work on this weekend? Come to this workshop to get your mind up and running!"],	
	[22, 23, "TBA", "Room 408", 0, ""],
	[22, 23, "TBA", "Room 408", 1, "INFO"],
	[24, 25, "Midnight Nerf War", "Yorkview Hall", 0, ""],
	[26, 27, "Triva/Text Games", "Yorkview Hall", 0, ""],
	[31, 33, "Breakfast", "Yorkview Hall", 2, ""],
	[34, 35, "SpaceX, Professor Don Hake II", "WBC 408", 0, ""],
	[34, 35, "SpaceX, Professor Don Hake II", "WBC 408", 1, "How Telsa is changing the world!"],
	[36, 38, "Lunch", "Yorkview Hall", 2, ""],
	[37, 39, "Meet-the-students", "Yorkview Hall", 0, ""],
	[37, 39, "Meet-the-students", "Yorkview Hall", 1, "Get answers to all of your questions about anything Tesla and more!"],
	[40, 41, "TBA", "Room 408", 0, ""],
	[40, 41, "TBA", "Room 408", 1, "INFO"],
	[41, 42, "Cup Stacking", "Room 408", 0, "Win some prizes and have fun!"],
	[43, 45, "Dinner", "York View Hall", 2, ""],
	[45, 46, "Keynote Speaker - Jason Roberts", "Weinstock Auditorium", 0, ""],
	[45, 46, "Keynote Speaker - Jason Roberts", "Weinstock Auditorium", 1, "How AI is used and shaping the future now"],
	[47, 49, "Smash Bros Ultimate 1V1 Tourney", "Room 408", 0, ""],
	[48, 48.5, "Midnight Whoopie Pies", "Yorkview Hall", 0, ""],
	[55, 57, "Breakfast", "Yorkview Hall", 2, ""],
	[57, 57, "Hacking Ends", "-", 0, ""],
	[58, 60, "Presentations and Judging", "Weinstock Auditorium", 0, ""]	
	[58, 60, "Presentations and Judging", "Weinstock Auditorium", 1, ""]				
	
];