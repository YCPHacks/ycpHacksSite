var YCPHacksScheduleGen = (function() {
    'use strict';

    /**********
     * config */
    var GENERAL_EVENT = 0
    var WORKSHOP = 1
    var FOOD = 2
    var FRI_MIDNIGHT = 24
	var SAT_MIDNIGHT = 48
	var START_DAY = 19; /* Day of the month to begin schedule */

    /**************
     * work funcs */
    function initYCPHacksSchedule() {
		var itisSaturday = false;
        var itisSunday = false;
        YCP_EVTS.map(function(event) {
            var start = event[0];
            var end = event[1];
            var description = event[2];
            var eventLocation = event[3];
            var eventType = event[4];

            var row = getTableRow(
                formatTime(start),
                formatTime(end),
                description,
                eventLocation
            );

			if( !hasHappened(end) ) {
				if (eventType == WORKSHOP) {
					var desc = event[5];
					var descRow = getWorkshopDescription(desc);
					document.getElementById('workshop-schedule').appendChild(row);
					document.getElementById('workshop-schedule').appendChild( getWorkshopDescription(desc) );
					document.getElementById('workshop-schedule').appendChild( getWorkshopDescription(" ") );
				}
					// Saturday
					if( start >= FRI_MIDNIGHT && !itisSaturday) {
						var saturdayHeader = document.createElement('tr');
						var saturdayCell = document.createElement('td');
						saturdayCell.className = "active";
						saturdayCell.colSpan = "4";
						saturdayCell.innerHTML = "Saturday";
						saturdayHeader.appendChild( saturdayCell );
						document.getElementById('general-schedule').appendChild( saturdayHeader );
						itisSaturday = true;
					}

					// Sunday
					if (start >= SAT_MIDNIGHT && !itisSunday) {
						var sundayHeader = document.createElement('tr');
						var sundayCell = document.createElement('td');
						sundayCell.className = "active";
						sundayCell.colSpan = "4";
						sundayCell.innerHTML = "Sunday";
						sundayHeader.appendChild(sundayCell);
						document.getElementById('general-schedule').appendChild(sundayHeader);
						itisSunday = true;
					}
					document.getElementById('general-schedule').appendChild(row);
				
			}
        });
    }

    function getTableRow(start, end, description, eventLocation) {
        var row = document.createElement('tr');
        var startCell = document.createElement('td');
        startCell.innerHTML = start;
        var endCell = document.createElement('td');
        endCell.innerHTML = end;
        var descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = description;
        var locationCell = document.createElement('td');
        locationCell.innerHTML = eventLocation;
        row.appendChild(startCell);
        row.appendChild(endCell);
        row.appendChild(descriptionCell);
        row.appendChild(locationCell);
        return row;
    }

	function getWorkshopDescription( desc ) {
		var row = document.createElement('tr');
		row.classList.add('classDescription');

		var description = document.createElement('td');
		description.innerHTML = desc;


		row.appendChild( document.createElement('td') );
		row.appendChild( document.createElement('td') );
		row.appendChild( description );
		row.appendChild( document.createElement('td') );
		return row;
	}

    function formatTime(t) {
        t = parseFloat(t)%24;
        var m = t >= 12 ? 'pm' : 'am';
        var min = Math.floor((t%1)*60)
        var hr = Math.floor(t)%12;
        if (hr === 0) hr = 12;
        if (min < 10) min = '0'+min;
        return hr + ':' + min + m;
    }

	function hasHappened( end ) {
		var currentTime = new Date();
		var curHour = (currentTime.getHours()+1) + 24 * ( (currentTime.getDate())-START_DAY );

    /* Event is over so just return false
		if( end < curHour ) {
			return true;
		} else {
			return false;
		}
    */
    return false;
	}

    return {
        init: initYCPHacksSchedule
    }

})();

window.addEventListener('load', YCPHacksScheduleGen.init);
