const kujenga = require('../../util/kujenga');

describe('kujenga', () => {
  it('converts number moja to kujenga', () => {
    const result = kujenga.moja_to_kujenga(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string moja to kujenga', () => {
    const result = kujenga.moja_to_kujenga('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number moja to kujenga string', () => {
    const result = kujenga.moja_to_kujenga_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string moja to kujenga string', () => {
    const result = kujenga.moja_to_kujenga_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number kujenga to moja', () => {
    const result = kujenga.kujenga_to_moja(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string kujenga to moja', () => {
    const result = kujenga.kujenga_to_moja('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number moja to colouredcoin', () => {
    const result = kujenga.moja_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string moja to colouredcoin', () => {
    const result = kujenga.moja_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number moja to colouredcoin string', () => {
    const result = kujenga.moja_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string moja to colouredcoin string', () => {
    const result = kujenga.moja_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to moja', () => {
    const result = kujenga.colouredcoin_to_moja(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to moja', () => {
    const result = kujenga.colouredcoin_to_moja('1000');

    expect(result).toBe(1000000);
  });
});
