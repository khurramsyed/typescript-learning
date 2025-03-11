import tournamentWinner from '../src/WinnerTeam'
it('Test Case #1', function () {
    const competitions = [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ];
    const results = [0, 0, 1];
    const expected = 'Python';
    const actual = tournamentWinner(competitions, results);
    chai.expect(actual).to.deep.equal(expected);
  });