import { Card, CardContent } from "@material-ui/core";
import CardTitle from "@saleor/components/CardTitle";
import SingleAutocompleteSelectField from "@saleor/components/SingleAutocompleteSelectField";
import { TaxClassFragment } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { makeStyles } from "@saleor/macaw-ui";
import { taxesMessages } from "@saleor/taxes/messages";
import { FetchMoreProps } from "@saleor/types";
import React from "react";
import { useIntl } from "react-intl";

import { ShippingZoneRateUpdateFormData } from "../ShippingZoneRatesPage/types";

interface ShippingMethodTaxesProps {
  value: string;
  taxClassDisplayName: string;
  taxClasses: Array<
    Omit<TaxClassFragment, "countries" | "metadata" | "privateMetadata">
  >;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<any>) => void;
  onFetchMore: FetchMoreProps;
}

const useStyles = makeStyles(
  {
    root: {
      overflow: "visible",
    },
  },
  { name: "ShippingMethodTaxes" },
);

const ShippingMethodTaxes: React.FC<ShippingMethodTaxesProps> = props => {
  const {
    value,
    disabled,
    taxClasses,
    taxClassDisplayName,
    onChange,
    onFetchMore,
  } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card className={classes.root}>
      <CardTitle title={intl.formatMessage(sectionNames.taxes)} />
      <CardContent>
        <SingleAutocompleteSelectField
          emptyOption
          disabled={disabled}
          displayValue={taxClassDisplayName}
          label={intl.formatMessage(taxesMessages.taxClass)}
          name={"taxClassId" as keyof ShippingZoneRateUpdateFormData}
          onChange={onChange}
          value={value}
          choices={taxClasses.map(choice => ({
            label: choice.name,
            value: choice.id,
          }))}
          InputProps={{
            autoComplete: "off",
          }}
          {...onFetchMore}
        />
      </CardContent>
    </Card>
  );
};
ShippingMethodTaxes.displayName = "ShippingMethodTaxes";
export default ShippingMethodTaxes;
