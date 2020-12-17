$(document).ready(function () {

    "use strict";

    // Based on Dartworld outchart poster
    var outchart3 = {
        '170': ['T20', 'T20', 'DB'],
        '167': ['T20', 'T19', 'DB'],
        '164': ['T20', 'T18', 'DB'],
        '161': ['T20', 'T17', 'DB'],
        '160': ['T20', 'T20', 'D20'],
        '158': ['T20', 'T20', 'D19'],
        '157': ['T20', 'T19', 'D20'],
        '156': ['T20', 'T20', 'D18'],
        '155': ['T20', 'T19', 'D19'],
        '154': ['T20', 'T18', 'D20'],
        '153': ['T20', 'T19', 'D18'],
        '152': ['T20', 'T20', 'D16'],
        '151': ['T20', 'T17', 'D20'],
        '150': ['T20', 'T18', 'D18'],
        '149': ['T20', 'T19', 'D16'],
        '148': ['T20', 'T20', 'D14'],
        '147': ['T20', 'T17', 'D18'],
        '146': ['T20', 'T18', 'D16'],
        //'145': ['T20', 'T19', 'D14'],
        '145': ['T20', 'T15', 'D20'], //85
        '144': ['T20', 'T20', 'D12'],
        '143': ['T20', 'T17', 'D16'],
        //'142': ['T20', 'DB', 'D16'],
        '142': ['T20', 'T14', 'D20'], //82
        '141': ['T19', 'T16', 'D18'],
        //'140': ['T20', 'T20', 'D10'],
        '140': ['T20', 'T16', 'D16'], //80
        //'139': ['T20', 'T13', 'D20'],
        '139': ['T20', 'T19', 'D11'], //79
        '138': ['T20', 'T18', 'D12'],
        '137': ['T20', 'T15', 'D16'],
        '136': ['T20', 'T20', 'D8'],
        '135': ['B', 'T20', 'DB'],
        '134': ['T20', 'T14', 'D16'],
        '133': ['T19', 'T20', 'D8'],
        '132': ['B', 'T19', 'DB'],
        '131': ['T20', 'T13', 'D16'],
        '130': ['T20', 'T20', 'D5'],
        '129': ['T19', 'T12', 'D18'],
        '128': ['T18', 'T14', 'D16'],
        '127': ['T20', 'T17', 'D8'],
        '126': ['T19', 'T19', 'D6'],
        '125': ['T18', 'T13', 'D16'],
        '124': ['T20', 'T16', 'D8'],
        '123': ['T19', 'T16', 'D9'],
        '122': ['T18', 'T20', 'D4'],
        '121': ['T17', 'T18', 'D8'],
        '120': ['T20', '20', 'D20'],
        '119': ['T19', 'T10', 'D16'],
        '118': ['T20', '18', 'D20'],
        '117': ['T20', '17', 'D20'],
        '116': ['T20', '16', 'D20'],
        '115': ['T19', '18', 'D20'],
        '114': ['T20', '14', 'D20'],
        '113': ['T20', '13', 'D20'],
        '112': ['T20', '20', 'D16'],
        '111': ['T19', '14', 'D20'],
        '109': ['T20', '17', 'D16'],
        '108': ['T20', '16', 'D16'],
        '107': ['T20', '15', 'D16'],
        '106': ['T20', '14', 'D16'],
        '105': ['T19', '16', 'D16'],
        '104': ['T20', '12', 'D16'],
        '103': ['T19', '10', 'D18'],
        '102': ['T20', '10', 'D16'],
        '101': ['T20', '9', 'D16'],
        '99': ['T19', '10', 'D16']
    };
    var outchart2 = {
        '110': ['T20', 'DB'],
        '100': ['T20', 'D20'],
        '98': ['T20', 'D19'],
        '97': ['T19', 'D20'],
        '96': ['T20', 'D18'],
        '95': ['T19', 'D19'],
        '94': ['T18', 'D20'],
        '93': ['T19', 'D18'],
        '92': ['T20', 'D16'],
        '91': ['T17', 'D20'],
        '90': ['T18', 'D18'],
        '89': ['T19', 'D16'],
        '88': ['T20', 'D14'],
        '87': ['T17', 'D18'],
        '86': ['T18', 'D16'],
        '85': ['T15', 'D20'],
        '84': ['T20', 'D12'],
        '83': ['T17', 'D16'],
        '82': ['T14', 'D20'],
        '81': ['T15', 'D18'],
        '80': ['T16', 'D16'],
        '79': ['T19', 'D11'],
        '78': ['T18', 'D12'],
        '77': ['T15', 'D16'],
        '76': ['T20', 'D8'],
        '75': ['T17', 'D12'],
        '74': ['T14', 'D16'],
        '73': ['T19', 'D8'],
        '72': ['T12', 'D18'],
        '71': ['T13', 'D16'],
        //'70': ['T18', 'D8'],
        '70': ['T20', 'D5'], //130
        '69': ['T19', 'D6'],
        '68': ['T20', 'D4'],
        '67': ['T17', 'D8'],
        '66': ['T18', 'D6'],
        '65': ['T11', 'D16'],
        '64': ['T16', 'D8'],
        '63': ['T13', 'D12'],
        '62': ['T10', 'D16'],
        '61': ['T15', 'D8'],
        '60': ['20', 'D20'],
        '59': ['19', 'D20'],
        '58': ['18', 'D20'],
        '57': ['17', 'D20'],
        '56': ['16', 'D20'],
        '55': ['15', 'D20'],
        '54': ['14', 'D20'],
        '53': ['13', 'D20'],
        '52': ['20', 'D16'],
        '51': ['19', 'D16'],
        '50': ['18', 'D16'],
        '49': ['17', 'D16'],
        '48': ['16', 'D16'],
        '47': ['15', 'D16'],
        '46': ['14', 'D16'],
        '45': ['13', 'D16'],
        '44': ['12', 'D16'],
        '43': ['11', 'D16'],
        '42': ['10', 'D16'],
        '41': ['9', 'D16']
    };
    var outchart1 = {
        '50': ['DB'],
        '40': ['D20'],
        '38': ['D19'],
        '36': ['D18'],
        '34': ['D17'],
        '32': ['D16'],
        '30': ['D15'],
        '28': ['D14'],
        '26': ['D13'],
        '24': ['D12'],
        '22': ['D11'],
        '20': ['D10'],
        '18': ['D9'],
        '16': ['D8'],
        '14': ['D7'],
        '12': ['D6'],
        '10': ['D5'],
        '8': ['D4'],
        '6': ['D3'],
        '4': ['D2'],
        '2': ['D1']
    };

    var team = {
            score: 301,
            roundCounter: 0
        },
        numOfTeams = 2,
        teams = [],
        currentTeam,
        currentDart = 0,
        settingsPage = $('#settings'),
        calculatorPage = $('#calculator'),
        gameToggleButtons = $('#game label'),
        teamsToggleButtons = $('#num-of-teams label'),
        roundTotalInput = $('#round-total'),
        roundTotalVal = 0,
        tempTeamScore,
        teamTabs = $('.team-tabs .team-tab'),
        teamButtons = teamTabs.children('button'),
        teamScoreInputs = teamTabs.children('input'),
        currentActiveInput,
        dartScoreButtons = $('.dart-scores button'),
        doubleButton = $('#double'),
        tripleButton = $('#triple'),
        pointButtons = $('#point-buttons'),
        numberPad = $('#number-pad'),
        pointMultiplier = 1;

    if ('ontouchstart' in window) {
        /* Touch Events supported */
        $('#point-buttons button, #number-pad button, #bull, #miss').addClass('touch');
    }

    function toggleKeypad(keypadType) {
        if (keypadType === 'number pad') {
            pointButtons.addClass('hide');
            numberPad.removeClass('hide');
        } else {
            pointButtons.removeClass('hide');
            numberPad.addClass('hide');
        }
        //pointButtons.toggleClass('hide');
        //numberPad.toggleClass('hide');
    }

    function teamNameFieldsDisplay() {
        $('#team-names .field-row').addClass('hide');
        $('#team-names .field-row').slice(0, numOfTeams).removeClass('hide');
    }

    function createTeams() {
        var i;
        for (i = 0; i < numOfTeams; i += 1) {
            teams.push(Object.create(team));

            // Add properties...
            teams[i].id = i;
            teams[i].name = 'Team ' + (i + 1);
            teams[i].round = [0, 0, 0];

            // Set current team to the first team
            currentTeam = teams[0];
        }

        teamTabs.addClass('hide');
        teamTabs.slice(0, numOfTeams).removeClass('hide');
    }

    function displayOut(outDartsArray) {
        dartScoreButtons.find('.dart-out').text('').removeClass('triple double');
        if (outDartsArray !== undefined) {
            dartScoreButtons.slice(currentDart).find('.dart-out').each(function (index) {
                var $this = $(this),
                    dartOut = outDartsArray[index];

                $this.text(dartOut);

                if (typeof dartOut !== 'undefined') {
                    if (dartOut.charAt(0) === 'T') {
                        $this.addClass('triple');
                    }
                    if (dartOut.charAt(0) === 'D') {
                        $this.addClass('double');
                    }
                }

            });
        }
    }

    function outchartLookup(currentScore, currentDart) {

        var outDarts = [];

        // If you have three darts
        if (currentDart === 0) {
            if (outchart3[currentScore] !== undefined) {
                outDarts = outchart3[currentScore];
            } else if (outchart2[currentScore] !== undefined) {
                outDarts = outchart2[currentScore];
            } else if (outchart1[currentScore] !== undefined) {
                outDarts = outchart1[currentScore];
            } else {
                outDarts = undefined;
            }
        }
        // If you have two darts
        if (currentDart === 1) {
            if (outchart2[currentScore] !== undefined) {
                outDarts = outchart2[currentScore];
            } else if (outchart1[currentScore] !== undefined) {
                outDarts = outchart1[currentScore];
            } else {
                outDarts = undefined;
            }
        }
        // If you have one darts
        if (currentDart === 2) {
            if (outchart1[currentScore] !== undefined) {
                outDarts = outchart1[currentScore];
            } else {
                outDarts = undefined;
            }
        }

        displayOut(outDarts);

    }

    function resetDubTrip() {
        pointMultiplier = 1;
        doubleButton.removeClass('active');
        tripleButton.removeClass('active');
    }

    function switchTeam(target, index) {

        var filteredTeam;

        if (target === 'next') {
            if (index === teams.length - 1) {
                currentTeam = teams[0];
            } else {
                filteredTeam = teams.filter(function (team) {
                    return team.id === index + 1;
                });
                currentTeam = filteredTeam[0];
            }
        }

        if (target === 'this') {
            filteredTeam = teams.filter(function (team) {
                return team.id === index;
            });
            currentTeam = filteredTeam[0];
        }

        teamTabs.removeClass('active');
        teamTabs.eq(currentTeam.id).addClass('active');

    }

    function resetForNextRound() {
        currentDart = 0;
        teamScoreInputs.eq(currentTeam.id).val(currentTeam.score);
        teamScoreInputs.removeProp('disabled');
        dartScoreButtons.find('.dart-score').text('--');
        dartScoreButtons.removeClass('active');
        dartScoreButtons.eq(0).addClass('active');
        currentTeam.round = [0, 0, 0];
        roundTotalVal = 0;
        roundTotalInput.val(0).parent().removeClass('active');
        tempTeamScore = undefined;
        resetDubTrip();
        if (pointButtons.hasClass('hide')) {
            toggleKeypad();
        }
    }

    function checkTon() {
        if (roundTotalVal >= 95) {
            alert('Good darts broseph! You got... \n\n' + roundTotalVal + ' points!');
        }
    }

    function checkWinOrBreak() {
        if (tempTeamScore === 0) {
            return 'win';
        }
        if (tempTeamScore <= 1) {
            return 'break';
        }
    }

    function doubleHandler() {
        if (pointMultiplier === 2) {
            pointMultiplier = 1;
            doubleButton.removeClass('active');
        } else if (pointMultiplier === 3) {
            pointMultiplier = 2;
            doubleButton.addClass('active');
            tripleButton.removeClass('active');
        } else {
            pointMultiplier = 2;
            doubleButton.addClass('active');
        }
    }

    function tripleHandler() {
        if (pointMultiplier === 3) {
            pointMultiplier = 1;
            tripleButton.removeClass('active');
        } else if (pointMultiplier === 2) {
            pointMultiplier = 3;
            tripleButton.addClass('active');
            doubleButton.removeClass('active');
        } else {
            pointMultiplier = 3;
            tripleButton.addClass('active');
        }
    }

    function calcRoundTotal() {
        // Update the round total
        roundTotalVal = 0;
        currentTeam.round.forEach(function (dartVal) {
            roundTotalVal = roundTotalVal + dartVal;
        });
        roundTotalInput.val(roundTotalVal);
    }

    function displayTempTeamScore() {
        // Update the total team score (temporarily, for display only)
        tempTeamScore = currentTeam.score;
        tempTeamScore = tempTeamScore - roundTotalVal;
        teamScoreInputs.eq(currentTeam.id).val(tempTeamScore);
    }

    function calcScore(point) {

        var pointValue = point.val() * pointMultiplier;

        currentTeam.round[currentDart] = pointValue;

        //  Display the individual dart scores
        dartScoreButtons.eq(currentDart).find('.dart-score').text(currentTeam.round[currentDart]);

        // Switch the active dart button
        if (currentDart <= 1) {
            dartScoreButtons.eq(currentDart).removeClass('active').next().addClass('active');
        }

        calcRoundTotal();
        displayTempTeamScore();

        // Disable team score inputs
        teamScoreInputs.prop('disabled', true);




        if (currentDart < 2) {
            currentDart += 1; // Only increase up to three maximum
            outchartLookup(tempTeamScore, currentDart);
        }



        resetDubTrip();

    }

    /* ------------------------------ */
    /*         ON PAGE LOAD           */
    /* ------------------------------ */

    // Set Round Total input to zero
    roundTotalInput.val(0);

    // Set game to 301 by default
    gameToggleButtons.children('input#301').prop('checked', true).parent().addClass('active');

    // Set two teams by default
    teamsToggleButtons.children('input#2-teams').prop('checked', true).parent().addClass('active');

    // Dislay team name fields
    teamNameFieldsDisplay();

    numberPad.addClass('hide');

    teamScoreInputs.removeProp('disabled');

    /* ------------------------------ */
    /*       SETTINGS LISTENERS       */
    /* ------------------------------ */

    gameToggleButtons.on('click', function () {
        if (gameToggleButtons.hasClass('active')) {
            gameToggleButtons.removeClass('active');
        }
        $(this).addClass('active');
    });

    teamsToggleButtons.on('click', function () {
        var $this = $(this);
        if (teamsToggleButtons.hasClass('active')) {
            teamsToggleButtons.removeClass('active');
        }
        $this.addClass('active');
        numOfTeams = $this.children('input').val();
        teamNameFieldsDisplay();
    });

    // Apply game settings selections, then switch to calculator view
    $('#submit-settings-btn').on('click', function () {

        createTeams();

        team.score = Number(settingsPage.find('#game input[type=radio]:checked').val());
        teamScoreInputs.val(team.score);

        teams.forEach(function (team, index) {

            var teamNameVal = settingsPage.find('#team-name-' + (index + 1)).val();

            if (teamNameVal !== '') {
                team.name = teamNameVal;
            }
            teamButtons.eq(index).text(team.name);
        });

        settingsPage.addClass('hide');
        calculatorPage.removeClass('hide');

    });

    /* ------------------------------ */
    /*      CALCULATOR LISTENERS      */
    /* ------------------------------ */

    pointButtons.on('click', 'button', function () {
        calcScore($(this));
    });

    $('#bull').on('click', function () {
        if (pointMultiplier === 3) {
            alert('Impossi-bull!');
        } else {
            calcScore($(this));
        }
    });

    $('#miss').on('click', function () {
        calcScore($(this));
    });

    doubleButton.on('click', function () {
        doubleHandler();
    });

    tripleButton.on('click', function () {
        tripleHandler();
    });

    // When switching to a different dart
    dartScoreButtons.on('click', function () {
        var $this = $(this);
        dartScoreButtons.removeClass('active');
        $this.addClass('active');
        currentDart = $this.val() - 1;

        roundTotalInput.parent().removeClass('active');
        toggleKeypad();
    });

    teamButtons.on('click', function () {
        var $this = $(this);
        if (currentTeam.id !== $this.parent().data('team-id')) {
            resetForNextRound();
            switchTeam('this', $this.parent().data('team-id'));
            outchartLookup(currentTeam.score, currentDart);
        }
    });

    teamScoreInputs.on('focusin', function () {
        var $this = $(this);
        $this.val('');
        toggleKeypad('number pad');
        currentActiveInput = $this;
    });

    roundTotalInput.on('focusin', function () {
        var $this = $(this);
        $this.val('').parent().addClass('active');
        dartScoreButtons.removeClass('active');
        toggleKeypad('number pad');
        currentActiveInput = $this;
    });

    numberPad.on('click', 'button', function () {

        var $this = $(this);

        // Round Total Input
        if (currentActiveInput.attr('id') === 'round-total') {

            if ($this.val() === 'clear') {
                roundTotalInput.val(0);
            } else {
                roundTotalInput.val(roundTotalInput.val() + $this.val());
            }

            currentTeam.round = [0, 0, 0];
            dartScoreButtons.find('.dart-score').text('--');
            roundTotalVal = roundTotalInput.val();
            displayTempTeamScore();
        }

        // Team Score Inputs
        if (currentActiveInput.attr('class') === 'team-score-input') {
            var thisTeam = teams[currentActiveInput.parent().data('team-id')];

            if ($this.val() === 'clear') {
                currentActiveInput.val('');
            } else {
                currentActiveInput.val(currentActiveInput.val() + $this.val());
            }

            thisTeam.score = currentActiveInput.val();
            outchartLookup(thisTeam.score, currentDart);

        }

    });

    $('#enter').on('click', function () {

        if (checkWinOrBreak() === 'win') {
            alert(currentTeam.name + ' wins!');
            checkTon();
            return;
        }
        if (checkWinOrBreak() === 'break') {
            alert('Break!');
        } else {
            // Update stored team score
            if (tempTeamScore !== undefined) {
                currentTeam.score = tempTeamScore;
                checkTon();
            }
        }

        resetForNextRound();
        switchTeam('next', currentTeam.id);
        outchartLookup(currentTeam.score, currentDart);
    });

});
